import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff", 
        justifyContent: "center",
      },
    header:
    {
        fontSize: 50,
        fontWeight: '900',
        textAlign: 'center',
        marginTop: '2%',
        marginBottom: '10%',
    },
    label:
    {
        color: '#7e7e7e',
        marginBottom:'5%',
    },
    inputArea:
    {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#e1e1e1',
        padding: '3%',
        marginBottom: '5%',
    },
    button:
    {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    loginButton:
    {
        fontSize: 50,
        backgroundColor:'#9955bb',
        padding:'3%',
        borderRadius:5,
        /* marginTop:'3%', */
        alignItems:'center',
        width:'40%',
        justifyContent:'center',
    },
    buttonText:{
        fontSize:20,
        color:'white',
    },
    apItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop:20,
      },
      apItemRight: {
        flex: 1,
        marginRight: 16,
      },
      apItemLeft: {
        flexDirection: 'column',
        alignItems: 'flex-end',
      },
      errorText: {
        color: 'red',
        fontSize: 13.8,
        /* marginTop: 10, */
      },
      inputContainer: {
        paddingHorizontal: 15,
        paddingTop:'10%',
      },
      icon: {
        marginRight:'4%'
      },
      
      SignUpButton: {
        justifyContent:'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        padding: '3%',
        marginBottom: '5%',
      }


})