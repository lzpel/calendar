"use client";

import { useSearchParams } from "next/navigation";

export default function DateContent() {
    const searchParams = useSearchParams();
    const date = searchParams.get("date");
    const id = searchParams.get("sample_id");
    const name = searchParams.get("sample_name");

    return (
        <>
            <div>{date}</div>
            <div>{id}</div>
            <div>{name}</div>
        </>
    );
}