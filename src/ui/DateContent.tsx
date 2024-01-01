"use client";

import {useSearchParams} from "next/navigation";
import React from "react";
import {dateToString, diff_days, diff_years_days_hours_minutes_seconds, stringToDate} from "@/util/date";
import {Typography} from "@mui/material";

const FORMAT_LIST=["left","passed","life"] as const
type FORMAT =typeof FORMAT_LIST[number]
function date_plus(a:Date, n:number):Date{
    let r=new Date(a)
    r.setFullYear(n+a.getFullYear())
    return r
}
function DateContentInner(params: {format:FORMAT, date:Date}){
    const date=params.date
    const [now, setNow] = React.useState(new Date());
    const [client, setClient] = React.useState(false)
    React.useEffect(() => {
        setInterval(() => {
            setNow(new Date())
        }, 1000);
        setClient(true)
    }, []);
    if(!client){
        //Text content does not match server-rendered HTML
        //Solution 1: Using useEffect to run on the client only
        //https://nextjs.org/docs/messages/react-hydration-error
        return <></>
    }
    switch (params.format) {
        case "left":
            const left_div=diff_years_days_hours_minutes_seconds(date,now)
            return <>
                <Typography variant="h4">{dateToString(params.date)}まで</Typography>
                <>あと{Math.ceil(diff_days(params.date, now))}日</>
                <p>{left_div[0]}年{left_div[1]}日{left_div[2]}時間{left_div[3]}分{left_div[4]}秒</p>
            </>
        case "passed":
            const passed_div=diff_years_days_hours_minutes_seconds(now,date)
            return <>
                <Typography variant="h4">{dateToString(params.date)}から</Typography>
                <>{Math.floor(diff_days(now, params.date))}日経過</>
                <p>{passed_div[0]}年{passed_div[1]}日{passed_div[2]}時間{passed_div[3]}分{passed_div[4]}秒</p>
            </>
        case "life":
            const date80 = date_plus(params.date, 80)
            const percent = Math.floor(100 * (now.getTime() - params.date.getTime()) / (date80.getTime() - params.date.getTime()))
            const divided=diff_years_days_hours_minutes_seconds(date80,now)
            return <>
                {dateToString(params.date)}生まれは
                <Typography variant="h4">人生80年として{percent}%経過、残り{100 - percent}%</Typography>
                <p>残り：{Math.floor((date80.getTime()-now.getTime())/1000)}秒</p>
                <p>{divided[0]}年{divided[1]}日{divided[2]}時間{divided[3]}分{divided[4]}秒</p>
            </>
    }
}
export default function DateContent(params: {format:FORMAT}) {
    const searchParams = useSearchParams();
    const date = stringToDate(searchParams.get("date")??"");
    if(date && params.format){
        return <DateContentInner format={params.format} date={date}/>
    }else{
        if(!date){
            return <>
                <h2>URLの日付データが不正です</h2>
                <p>期待するurlの例:~/?date={dateToString(new Date(), true)}</p>
            </>
        }
        if(!params.format){
            return <>
                <h2>URLの表示形式データが不正です</h2>
                <p>期待するurl:~/?format=life</p>
            </>
        }
    }
}