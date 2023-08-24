import {useEffect, useState, Fragment} from 'react'
import './App.css';
import moment from 'moment';
import { Table, Popover, Tag, Popconfirm } from 'antd';
import {
	EditOutlined,
	DeleteOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from 'antd/es/table';
import { TUser } from './interfaces';


function App() {
  const [data, setData] = useState<TUser[]>([]);
  

  useEffect(() => {
    let arrUser: TUser[] = []
    const getUser = (num: number, MAXIMUM: number, MINIMUM: number) => {
      for(let i = 0; i < num; i++) {
          let userId = new Date().getTime() + (i * 1000);
          let userName = `User ${i + 1}`;
          let balance = Math.floor(Math.random() * (MAXIMUM - MINIMUM + 1)) + MAXIMUM;
          let email = `user${i + 1}@gmail.com`;
          let registerAt = new Date(userId);
          let active =  i % 2 === 0 ? true : false;
          const newUser = {
              id: userId.toString(),
              name: userName,
              balance: balance,
              email: email,
              registerAt: registerAt,
              active: active
          }
          arrUser.push(newUser);
      }   
    }
    getUser(100, 10000, 500);
    setData(arrUser)
  }, [])

  const changeBalance = (balance: number): string => {
    let newBalance = balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return newBalance;
  }

  const columns: ColumnsType<TUser> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Balance ($)',
      dataIndex: 'balance',
      render: (text: number) => {
        let newBalance = changeBalance(text);
        return <p>${newBalance}</p>
      }
    },
    {
      title: 'Email',
      dataIndex: 'email',
      render: (value) => {
        return <>
       <a href={`mailto:${value}`}>{value}</a>
      </>
      }
    },
    {
      title: 'Registration',
      dataIndex: 'registerAt',
      render: (value) => {
        return <>
          <Popover content={() => <p>{moment(value).format("yyyy-MM-DD HH:mm:ss")}</p>}>
             {moment(value).format("yyyy-MM-DD")}
          </Popover>
        </>
      },
    },
    {
      title: 'STATUS',
      dataIndex: 'active',
      render: (value) => {
        return value? <Tag color='green'>ONLINE</Tag> : <Tag color='red'>OFFLINE</Tag>
      }
    },
    {
      title: 'ACTION',
      dataIndex: "",
      render: () => {
        return <Fragment>
          <a className='editIcon'>
							<EditOutlined style={{fontSize: '1.2rem'}} />
						</a>

						<Popconfirm
							placement='top'
							title={"Do you want to delete this user?"}
							onConfirm={() => {
								alert('Delete user successfully!')
							}}
							okText='Yes'
							cancelText='No'>
                <a className='deleteIcon'>
                  <DeleteOutlined style={{fontSize: '1.2rem'}} />
                </a>
						</Popconfirm>
        </Fragment>
      }
    }
  ];


  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: TUser[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: TUser) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };
  


  return (
    <div className="App">
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        rowKey={"id"}
        dataSource={data}
      />
    </div>
  );
}

export default App;
