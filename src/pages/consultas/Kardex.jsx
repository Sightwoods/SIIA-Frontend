import { Document, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer';
import { Layout } from '../../components/layout/Layout';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#FFFFFF'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
});

export const Kardex = () => {

    return (
        <Layout>
            <PDFViewer width={'100%'} height={'500'}>
                <Document>
                    <Page size="letter" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Section #1</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                    </View>
                    </Page>
                </Document>
            </PDFViewer>
        </Layout>
    );
}