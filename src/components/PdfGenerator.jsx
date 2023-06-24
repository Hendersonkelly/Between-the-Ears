import React from 'react';
import { Page, Text, View, Document, StyleSheet,  } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
	text: {
		width: '100%',
		backgroundColor: '#f0f0f0',
		color: '#212121',
	},
});

// Create Document Component
const PdfGenerator = ({apiResponse}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{apiResponse}</Text>
      </View>
      
    </Page>
  </Document>
  
);

export default PdfGenerator