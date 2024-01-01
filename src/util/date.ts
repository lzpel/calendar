
export function dateToString(now: Date, input: boolean=false){
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString();
    const day = now.getDate().toString();
    if(input){
        return `${year.padStart(4, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
    return year + '年' + month + '月' + day + '日'
}
export function stringToDate(str: string): Date | undefined {
    // 文字列の長さが8でなければエラーを返す
    if (str.length !== 10) {
        return undefined;
    }
    // 文字列を年、月、日に分割する
    let year = parseInt(str.slice(0, 4));
    let month = parseInt(str.slice(5, 9));
    let day = parseInt(str.slice(8, 10));
    // Dateオブジェクトを作成する
    let date = new Date(year, month - 1, day);
    // 有効な日付かどうかチェックする
    if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
        return date;
    }
    return undefined
}
const split=(y:number,div:number[])=>{
    let r:number[] =[]
    div.forEach(value => {
        r.push(y%value)
        y=Math.max(0,Math.floor(y/value))
    })
    r.push(y)
    return r
}
export function diff_days(a:Date,b:Date):number{
    return (a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24)
}
export function diff_years_days_hours_minutes_seconds(a:Date, b:Date){
    const r= split(a.getTime()-b.getTime(),[1000,60,60,24,365])
    return [r[5], r[4], r[3], r[2], r[1]]
}