'use client';

import React from 'react';
import { Table } from 'antd';
import Image from 'next/image';
import { deleteBlog } from '@/services/blog';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Blog = {
    id: string;
    title: string;
    image: string
};

type Props = {
    data: Blog[];
};

export default function DashboardClient({ data }: Props) {
    const router = useRouter()

    const handleDelete = async (id: string) => {
        // console.log(id);

        try {
            await deleteBlog(id)
            router.refresh()
            alert('xóa thanh cong')
        } catch (error) {
            console.log(error);
        }
    }
    const dataSource = data.map((item) => ({
        key: item.id,
        name: item.title,
        Image: item.image,
    }));

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Image',
            dataIndex: 'Image',
            key: 'Image',
            render: (src: string) => (
                <Image src={src} alt="img" width={100} height={100} />
            ),
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            render: (_: any, record: any) => <div className='flex items-center gap-3'>
                <Link href={`admin/updateBlog/${record.key}`} >Edit</Link>
                <button onClick={() => handleDelete(record.key)}>Delete</button>
            </div>,
        },
    ];

    return (
        <div className='mt-4'>
            <div className="flex justify-end">
                <Link href="admin/addblog" >Add blog</Link>
            </div>

            <Table dataSource={dataSource} columns={columns} className="mt-10" />

        </div>
    );
}

