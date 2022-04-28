import Navigation from "../../components/Navigation"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { instance } from "../../axios"
import colors from "../../utils/colors"
import { LightenDarkenColor } from "lighten-darken-color"

const EditTitles = styled.div`
    display:flex;
    flex-direction:column;
    padding:5% 0 0 5%;
    width:90%;
    height:fit-content;
`
const EditPage = styled.div`
    min-height:939px;
    display:flex;
    flex-direction:row;
    background-color:${colors.backgroundLight};
`
const EditCard = styled.div`
    margin: 10% 0 0 40%;
    max-width:40%;
    width:fit-content;
    height:fit-content;
    max-height:50%;
    background-color:${colors.backgroundLight};
    border-radius:5%;
    border:2px solid ${colors.primary}
`
const EditHeader = styled.div`
    border-radius:15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const EditImg = styled.img`
    object-fit: cover;
    border:2px solid ${colors.secondary};
    max-height:400px;
    width:90%;
    margin:5%;
    border-radius:5%;
`
const EditContent = styled.input`
    padding:5%;
    width:80%;
    margin:0 0 5% 5%;
    border-radius: 20px;
    padding-bottom:5%;
`

function EditPost(){
    let [post,setPost] = useState([]);
    let url = new URL(document.location);
    // let id = params.get("id");
    let id = url.search;
    id = id.split('?')[1];
    console.log(id);

    function getPostById(){
        instance.get(`/post/find/${id}`).then((response)=>{setPost(response.data)})
    }
    useEffect(()=>{
        getPostById();
    },[])

    return(
        <EditPage style={{minHeight:'934px',backgroundColor:LightenDarkenColor(colors.backgroundLight, 70)}}>
            <Header/>
            <Navigation/>
            <EditCard>                
                <EditHeader>
                    <EditTitles>
                        <h1 style={{color:`${colors.primary}`}}>Edit du post n° {post.id}</h1>
                        <h2 style={{color:`${colors.secondary}`}}>Crée par {post.author}</h2>
                    </EditTitles>
                    <EditImg alt="" src={post.image}/>
                    <EditContent value={post.content}></EditContent>                    
                </EditHeader>
            </EditCard>
            <Footer/>
        </EditPage>   
    )
}
export default EditPost