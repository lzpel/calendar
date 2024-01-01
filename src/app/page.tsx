"use client"
import {dateToString, stringToDate} from "@/util/date";
import url from "@/util/url";
import React from "react";
import {ButtonGroup, Grid, Typography} from "@mui/material";
import {Button} from "@mui/base";
import {Stack} from "@mui/system";
export default function Home() {
    const [date, setDate]=React.useState(new Date() as Date|undefined)
    const dateString=date ? dateToString(date) : "~"
    const dateInputString=date? dateToString(date,true):""
    return (
        <>
            <Typography variant="h4">1. 日付を選択</Typography>
            <input type="date" value={dateInputString} onChange={(e) => {
                setDate(stringToDate(e.currentTarget.value))
            }}/>
            <Typography variant="h4">2. 表示形式を選択</Typography>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical outlined button group"
                >
                    <Button href={url(`/left?date=${dateInputString}`)}>{dateString}まであと何日</Button>,
                    <Button href={url(`/passed?date=${dateInputString}`)}>{dateString}から何日経過</Button>,
                    <Button href={url(`/life?date=${dateInputString}`)}>{dateString}生まれの余命</Button>,
                </ButtonGroup>
        </>
    )
}
