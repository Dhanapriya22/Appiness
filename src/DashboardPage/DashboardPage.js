import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Header } from '../Header';
import { Footer } from '../Footer';
import DataTable from 'react-data-table-component';
//import CSS
import "./DashboardPage.css";


const data = [
    { id: 1, name: 'Test 1', age: '11', gender: 'male', email: 'test1@gmail.com', phone: '9415346313' },
    { id: 2, name: 'Test 2', age: '12', gender: 'male', email: 'test2@gmail.com', phone: '9415346314' },
    { id: 3, name: 'Test 3', age: '13', gender: 'male', email: 'test3@gmail.com', phone: '9415346315' },
    { id: 4, name: 'Test 4', age: '14', gender: 'male', email: 'test4@gmail.com', phone: '9415346316' },
    { id: 5, name: 'Test 5', age: '15', gender: 'male', email: 'test5@gmail.com', phone: '9415346317' },
    { id: 6, name: 'Test 6', age: '16', gender: 'male', email: 'test6@gmail.com', phone: '9415346318' },
    { id: 7, name: 'Test 1', age: '11', gender: 'male', email: 'test1@gmail.com', phone: '9415346313' },
    { id: 8, name: 'Test 2', age: '12', gender: 'male', email: 'test2@gmail.com', phone: '9415346314' },
    { id: 9, name: 'Test 3', age: '13', gender: 'male', email: 'test3@gmail.com', phone: '9415346315' },
    { id: 10, name: 'Test 4', age: '14', gender: 'male', email: 'test4@gmail.com', phone: '9415346316' }
];
const columns = [
    {
        name: 'Id',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Age',
        selector: 'age',
        sortable: true,
    },
    {
        name: 'Gender',
        selector: 'gender',
        sortable: true,
    },
    ,
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'Phone Number',
        selector: 'phone',
        sortable: true,
    },
];

class DashboardPage extends React.Component {

    render() {
        return(
            <div>
                <Header />
                <div className="dashboard_bg">
                    <Row className="dashboard_user">
                        <Col>
                            <h1>Welcome</h1>
                        </Col>
                    </Row>
                    <div className="dashboard">
                        <Row>
                            <h2>Dashboard</h2>
                        </Row>
                        <Row>
                            <DataTable
                                columns={columns}
                                data={data}
                            />
                        </Row>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default DashboardPage;