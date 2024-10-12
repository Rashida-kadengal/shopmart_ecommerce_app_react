import {useNavigate} from 'react-router-dom'
function NotFound() {
    const navigate=useNavigate()
  
    return ( 
        <>
        <div className="row container  " style={{marginBottom:10}} >
         
        <div className='col-md-4 d-flex justify-content-center '>
            <img className='img-fluid  ' src='https://static.vecteezy.com/system/resources/previews/009/674/012/non_2x/no-data-found-concept-illustration-for-websites-landing-pages-mobile-application-banner-and-posters-vector.jpg'></img>
        </div>
        <div className='col-md-4'>
            <div className='row  py-5'>
            <div className='col-md-5'><button className='btn btn-primary' onClick={()=>{navigate(-1)}}>Back</button></div>
            <div className='col-md-6'><button className='btn btn-primary' onClick={()=>{navigate('/')}}>Back to Home</button></div>
            </div>
        </div>

        </div>
        </>
   
     );
}

export default NotFound;