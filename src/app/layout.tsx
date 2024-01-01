import type { Metadata } from 'next'
import React from "react";
import {Container, Grid} from "@mui/material";
import {Stack} from "@mui/system";

const title="あと何日？"
const description="'今日から選択した日付まで、あと何日かを計算します。'"
export const metadata: Metadata = {
  title,
  description,
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="jp">
      <body>
      <Container fixed>
          <h1>{title}</h1>
          {props.children}
          <hr/>
          <Stack
              direction="row"
              spacing={2}
          >
              <a href={"/"}>home</a>
              <a href="https://twitter.com/lzpel">© lzpel 2024</a>
          </Stack>
      </Container>
      </body>
    </html>
  )
}
