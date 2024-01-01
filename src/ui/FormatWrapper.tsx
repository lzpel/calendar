import React from "react";
import url from "@/util/url";
import {Stack} from "@mui/system";

const formatWrapper = (params: { children: React.ReactNode }) => {
    return <>
        <Stack alignItems="center">
            {params.children}
        </Stack>
    </>
}
export default formatWrapper