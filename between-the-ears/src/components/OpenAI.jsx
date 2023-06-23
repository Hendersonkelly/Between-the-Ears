import React, { useState } from 'react';
import dotenv from 'dotenv';

import { Button, Loader, Grid, Container,Image } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import PdfGenerator from './PdfGenerator';
import { PDFDownloadLink   } from '@react-pdf/renderer';
const { Configuration, OpenAIApi } = require("openai");
dotenv.config();





const OpenAI = ({prompt}) => {
 
const dispatch = useDispatch()
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
 
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Please Give me 1 entree recipe, 1 side recipe and 1 dessert recipe for a child's movie night with the Disney movie theme ${prompt}.  [
          {" name: , ingredients: , instructions: }
        
        ]`,
        temperature: 0.7,
        max_tokens: 2000,
   
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        
      });
    
      
 
      setApiResponse(result.data.choices[0].text);
    } catch (e) {
      //console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }
   
      
      setLoading(false);
    
    
  };

  


  return (
    <>
  <Grid>
    <Grid.Row>

<Container  >
 
    <Button style={{color:"black", margin:"3em"}} onClick={handleSubmit} size='massive'>Get Recipes</Button>

  
  </Container>
 
  <Container>
  {loading ? (
       <Loader active inline="centered" />
     ):(<div> </div>)}
 
    </Container>
 </Grid.Row>


    <Grid.Row>
      <Container>
         {apiResponse && (
           <Container text>
        
           <Button size='massive'>
          <PDFDownloadLink style={{color:"black"}} document={<PdfGenerator apiResponse={apiResponse}/>} fileName="recipe.pdf">
           {({ blob, url, loading, error }) =>
           loading ? 'Loading document...' : "Download a PDF"
           }
           </PDFDownloadLink>
          </Button>   
         
              <div
              style={{
                 display:"block",
               width:"62em",
               backgroundColor:"#f4efee"
              
               }}
        >
          <pre 
          style={{fontFamily: "sans-serif"}}>
            <strong> Recipes:</strong>
            {apiResponse}
          </pre>
          
        </div>
        </Container>

        
        )}
    
  </Container>

    </Grid.Row>
    </Grid>   
    </>
  );
};


export default OpenAI;
