'use client';

import React from 'react';
import { Table } from 'antd';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { deleteTag } from '@/services/tag';
import { toast } from 'sonner';
import { tag } from '@/types/tag';

type Props = {
    data: tag[];
};

export default function TagList({ data }: Props) {
    const router = useRouter()

    const handleDelete = async (id: string) => {
        // console.log(id);

        try {
            await deleteTag(id)
            toast.success("Xóa thành công")
            router.refresh()
        } catch (error) {
            console.log(error);
        }
    }
    const dataSource = data.map((item) => ({
        key: item.id,
        tag: item.tag,
    }));

    const columns = [
        {
            title: 'Tag',
            dataIndex: 'tag',
            key: 'tag',
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            render: (_: any, record: any) => <div className='flex items-center gap-3'>
                <Link href={`updateTag/${record.key}`} >Edit</Link>
                <button onClick={() => handleDelete(record.key)}>Delete</button>
            </div>,
        },
    ];

    return (
        <div className='mt-4'>
            <div className="flex justify-end">
                <Link href="addtag" >Add Tag</Link>
            </div>
            <Table dataSource={dataSource} columns={columns} className="mt-10" />

        </div>
    );
}

