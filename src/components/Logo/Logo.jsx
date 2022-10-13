export default function Logo(props) {
    return (
        <div className="">
            <img src= {process.env.PUBLIC_URL+'/images/logo.png'} width='200px' alt ='Logo'/>
        </div>
    );
}