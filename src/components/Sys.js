import * as React from
"https://cdn.skypack.dev/react@17.0.1";
import Button from 'react-bootstrap/Button';


function Sys(){
  return(
    <>
    <div>
        <h2 className="dwd_header">System Requirements For Android Studio :-</h2>
    </div>
  <div className="wrapper">
      <Card className="kot" 
        title="Windows"
        description={<ul>
            <li>64-bit Microsoft® Windows® 8/10</li>
            <li>x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD CPU with support for a Windows Hypervisor</li>
            <li>8 GB RAM or more</li>
            <li>8 GB of available disk space minimum (IDE + Android SDK + Android Emulator)</li>
            <li>1280 x 800 minimum screen resolution</li>
        </ul>}
        />
       <Card className="kot"
        title="Linux"
        description={<ul>
            <li>Any 64-bit Linux distribution that supports Gnome, KDE, or Unity DE; GNU C Library (glibc) 2.31 or later.</li>
            <li>x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD processor with support for AMD Virtualization (AMD-V) and SSSE3</li>
            <li>8 GB RAM or more</li>
            <li>8 GB of available disk space minimum (IDE + Android SDK + Android Emulator)</li>
            <li>1280 x 800 minimum screen resolution</li>
        </ul>}
        />
       <Card className="kot"
        title="Mac"
        description={<ul>
            <li>MacOS® 10.14 (Mojave) or higher</li>
            <li>ARM-based chips, or 2nd generation Intel Core or newer with support for Hypervisor.Framework</li>
            <li>8 GB RAM or more</li>
            <li>8 GB of available disk space minimum (IDE + Android SDK + Android Emulator)</li>
            <li>1280 x 800 minimum screen resolution</li>
        </ul>}
        />
       
      
      </div>
      </>
  )
}


function Card(props){
  return(
  <div className="kot">
      <div className="kot__body">
        {/* <img class="sys_img" src={props.img}/> */}
        <h2 className="kot__title">{props.title}</h2>
        <p className="sys__description">{props.description}</p>
      </div>
      <Button variant="outline-success" href="download" className="kot_btn">
        Download
      </Button>
      </div>
  )
}

export default Sys; 