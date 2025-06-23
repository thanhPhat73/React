import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';

const UserTable = () => {

    const [dataUsers, setDataUsers] = useState([]);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },


    ];

    const loadUser = async () => {
        console.log("Run")
        const res = await fetchAllUserAPI()
        console.log('end', res)
    }
    loadUser()
    return (
        <Table columns={columns} dataSource={dataUsers} />
    )

}
export default UserTable;