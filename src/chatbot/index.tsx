import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useChatBot } from './context';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export interface ChatbotProps {
}

export const Btn = (props:{title:string, onPress:any}) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.btn}>{props.title}</Text>
        </TouchableOpacity>)
}

export default function Chatbot (props: ChatbotProps) {

    const [ textInput, setTextInput ] = React.useState<string|null>(null);
    const { CBMessages, CBButtons, CBInput, CBAvatar, doAction } = useChatBot();
    const flatListRef = React.useRef(null);

    React.useEffect(() => {
        flatListRef.current.scrollToEnd();
    }, [CBButtons])

    return (
        <LinearGradient 
            colors={['#f6d365', '#fda085']}
            style={styles.container}>
            {/* AVATAR */}
            <Image source={CBAvatar} style={styles.avatar} />

            {/* MENSAGENS */}
            <FlatList
                ref={flatListRef}
                keyExtractor={(item, index) => String(index) }
                onContentSizeChange={() => flatListRef.current.scrollToEnd()}
                data={CBMessages}
                // style={styles.messages}>
                renderItem={({item, index}) => (
                    <Text key={String(index)} style={[styles.msg, (item.you ? styles.msgYou : styles.msgbot)]}>{item.message}</Text>
                )}
            />

            {/* BOTÕES */}
            <View style={{minHeight: 50}}>
                {CBButtons.length > 0 &&
                <View style={styles.buttons}>
                    {CBButtons.map((btn, index) => (
                        <Btn key={String(index)} title={btn.title} onPress={() => btn.onPress(doAction)}/>

                    ))}
                </View>}

                {/* INPUT */}
                {CBInput &&
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} onChangeText={text => setTextInput(text)} />
                        <TouchableOpacity onPress={() => {
                            CBInput.onPress(doAction, textInput);
                            setTextInput(null);
                        }}>
                            <View style={styles.inputBtn}>
                                <MaterialIcons name="send" size={20} color="white"/>
                            </View>
                        </TouchableOpacity>
                    </View>
                }   
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: 20,
        // backgroundColor: '#C9EDDC'
    },
    avatar: {
        height: 200,
        width: 200,
        marginTop: 20,
        borderRadius: 20,
        alignSelf: 'center'
    },
    // Mensagens
    messages: {
        flex: 1
    },
    msg: {
        marginVertical: 10,
        padding: 5,
        borderRadius: 5,
        color: 'white',
        fontSize: 17
    },
    msgbot: {
        backgroundColor: '#82968C',
        alignSelf: 'flex-start'
    },
    msgYou: {
        backgroundColor: '#6A706E',
        alignSelf: 'flex-end'
    },
    // Botões
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn: {
        margin: 10, 
        backgroundColor: '#4C3B4D',
        padding: 5,
        borderRadius: 10,
        color: 'white',
        minWidth: 100,
        textAlign: 'center'
    },
    // Input
    inputContainer: {
        flexDirection: 'row'
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        padding: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        height: 40
    },
    inputBtn: {
        backgroundColor: '#4C3B4D',
        padding: 5,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        height: 40
    }


});

//======================================================