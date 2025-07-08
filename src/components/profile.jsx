import Layout from "./layout.jsx"
const Profile = (props) => {
  return (
    <Layout>
      <div style={{display: 'flex',flexDirection:'column',border:'1px solid black',padding:'10px',margin:'10px'}}>
      <h3 style={{padding:0,margin:0,color:'red'}}>Welcome {props.name}</h3>
      <p style={{padding:0}}>Your Email is : {props.email}</p>
      <p><button style={{border:'1px solid blue',color:'white',background:'blue',borderRadius:'50px'}} onClick={()=>alert(`Enjoy your journey ${props.name}` )}>Message</button></p>
      </div>
    </Layout>
  )
}
export default Profile

