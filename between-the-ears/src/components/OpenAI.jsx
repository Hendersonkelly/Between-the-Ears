import React, { useState } from 'react';
import dotenv from 'dotenv';

import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import PdfGenerator from './PdfGenerator';
import { PDFViewer,PDFDownloadLink, Document, Page   } from '@react-pdf/renderer';
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

      <div>
      <Button onClick={handleSubmit} size='massive'>Recipes</Button>
       
      </div>
      {apiResponse && (
        <div
          style={{
            display: "flex",
            justifyContent: "right"
          
          }}
        >
          <pre 
          style={{fontFamily: "sans-serif"}}>
            <strong>Recipes:</strong>
            {apiResponse}
          </pre>
          
        </div>
        

        
        )}
        
        
        <div>
    <PDFDownloadLink document={<PdfGenerator apiResponse={apiResponse}/>} fileName="recipe.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download a PDF of this recipe'
      }
    </PDFDownloadLink>
  </div>

       
    </>
  );
};


export default OpenAI;
