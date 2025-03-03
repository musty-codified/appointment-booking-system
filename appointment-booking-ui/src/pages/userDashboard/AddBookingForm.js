import {useState } from 'react';
import { Input, Col, Form, Row, Spin, } from 'antd';
import {useAuth} from '../../context/AuthContext.js'
import {LoadingOutlined} from '@ant-design/icons';
  
const rowGutterSize = 10
const spanSize = 10;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const AddBookingForm = ({ setShowDrawer }) => {
    const [ form ] = Form.useForm() 
    const[submitting, setSubmitting] = useState(false);
    const {headerTitle, addBookingConfig} = useAuth()

    const onClose = () => setShowDrawer(false);

       const onFinish = appointment => {
         setSubmitting(true);
         const newAppointment = { ...appointment }
         console.log("appointment object: " + JSON.stringify(newAppointment, null, 2))
         console.log("appointment object: " + JSON.stringify(newAppointment, null, 2))

        if(headerTitle === "Add New Appointment")
    
        addBookingConfig(setSubmitting, onClose, newAppointment)

        // else
        // updateLocationConfig(onClose, newLocation)
    };

    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2))
    };

    
  return (
    <section className="form-section">
    <Form layout="vertical"
            form={form}
            onFinishFailed={onFinishFailed}
            onFinish={onFinish}>
        <Row gutter={rowGutterSize}>
            <Col span={spanSize}>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[{required: true, message: 'Username required'}]}
                >
                    <Input placeholder="Username"/>
                </Form.Item>
            </Col>
        </Row>
    
        <Row gutter={rowGutterSize}>
            <Col span={spanSize}>
                <Form.Item
                    name="date"
                    label="date"
                    rules={[{required: true, message: 'Booking date required'}]}
                >
                    <Input placeholder="Booking Date"/>
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={rowGutterSize}>
            <Col span={spanSize}>
                <Form.Item
                    name="timeSlot"
                    label="timeSlot"
                    rules={[{required: true, message: 'Time slot required'}]}
                >
                    <Input placeholder="Time Slot" type="string"/>
                </Form.Item>
            </Col>
        </Row>


        <Row>
            <Col span={spanSize}>
                <Form.Item >
                    <button className="primary home-btn" type="submit" style={{margin: "auto"}}>Submit</button>
                </Form.Item>
            </Col>
        </Row>
        <Row>
            { submitting && <Spin indicator={antIcon}/> }
        </Row>
    </Form>

    </section>
  )
}

export default AddBookingForm