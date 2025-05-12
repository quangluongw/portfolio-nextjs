'use client'
import Link from 'next/link'
import React, { use } from 'react'

export default function NewArticles({ params, searchParams }:
    {
        params: Promise<{ articleid: string }>;
        searchParams: Promise<{ lang: string }>
    }) {
    const { articleid } = use(params)
    const { lang } = use(searchParams)
    return (
        <div>
            <h1>Bài viết mới {articleid} </h1>
            <p>{lang}</p>
            <Link href={`/articles/${articleid}?lang=vn`}>Tiếng Việt </Link>
            <Link href={`/articles/${articleid}?lang=en`}>Tiếng Anh </Link>
        </div>
    )
}
