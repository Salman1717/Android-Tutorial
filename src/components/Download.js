
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './Download.css';
import Kotlin from './Kotlin';




function Download() {
  

  return (
    

    <><Container className="cont">
      <h3 className='dwd_header'>Download Android Studio for:-</h3>
      <Row>
        <Col className='cont_col'>
          <div >
            <Card className="card" hover style={{ width: '18rem' }}>
              <Card.Img className="image-box" variant="top" src="https://logos-world.net/wp-content/uploads/2020/12/Windows-New-Logo-700x394.png" />
              <Card.Body>
                <Card.Title>Windows</Card.Title>
                <Card.Text >
                  Download Android Studio Version 2021.3.1.17 For Windows.
                </Card.Text>
                <Button  variant="outline-success" href="https://redirector.gvt1.com/edgedl/android/studio/install/2021.3.1.17/android-studio-2021.3.1.17-windows.exe">Download</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col className='cont_col'>
          <div>
            <Card className="card" style={{ width: '18rem' }}>
              <Card.Img className="image-box" variant="top" src="https://logos-world.net/wp-content/uploads/2020/09/Linux-Logo.png" />
              <Card.Body>
                <Card.Title>Linux</Card.Title>
                <Card.Text>
                  Download Android Studio Version 2021.3.1.17 For Linux.
                </Card.Text>
                <Button variant="outline-success" href="https://redirector.gvt1.com/edgedl/android/studio/install/2021.3.1.17/android-studio-2021.3.1.17-mac.dmg">Download</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col className='cont_col'>
          <div>
            <Card className="card" style={{ width: '18rem' }}>
              <Card.Img className="image-box" variant="top" src="https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo-700x394.png" />
              <Card.Body>
                <Card.Title>MacOS</Card.Title>
                <Card.Text>
                  Download Android Studio Version 2021.3.1.17 For MacOS.
                </Card.Text>
                <Button variant="outline-success" href="https://redirector.gvt1.com/edgedl/android/studio/ide-zips/2021.3.1.17/android-studio-2021.3.1.17-linux.tar.gz">Download</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>

    </Container>
    <div align="right" className='sys'>
      <Button href="sys-req" variant="outline-success">See System Requirements</Button>
    </div>
     </>
  );


}

  
export default Download;