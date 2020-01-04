export default class Box extends React.Component {
    render() {
        return(
            <div style={{padding:"15px",borderRadius:"30px",backgroundColor:"#8a56ff",display:"flex",color:"white",flexDirection:"column",width:this.props.width,marginLeft:"auto",marginRight:"auto"}}>
                {this.props.children}
            </div>
        )
    }
}