import type { Metadata } from 'next'
import React from "react";
import {Container, Grid} from "@mui/material";
import url from "@/util/url";
import {Stack} from "@mui/system";

export const metadata: Metadata = {
  title: 'あと何日？',
  description: '今日から選択した日付まで、あと何日かを計算します。',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="jp">
      <body>
      <Container fixed>
          <h1>{metadata.title}</h1>
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
