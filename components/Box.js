export default class Box extends React.Component {
    render() {
        return(
            <div style={{padding:"15px",borderRadius:"30px",backgroundColor:"#4b24a4",display:"flex",color:"white",boxShadow:"3px 3px 3px #201539",flexDirection:"column"}}>
                {this.props.children}
            </div>
        )
    }
}