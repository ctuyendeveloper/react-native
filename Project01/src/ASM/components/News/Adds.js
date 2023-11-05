import { StyleSheet, Text, View, Pressable, TextInput, Modal, Alert, Image } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import React, { useState, useCallback } from 'react'
import { addNews, uploadImage } from '../User/UserService';

const Adds = (props) => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imagePath, setImagePath] = useState(null);

    const [modalVisible, setModalVisible] = useState(false);
    const { navigation } = props;

    const takePhoto = useCallback(async (response) => {
        if (response.didCancel) return;
        if (response.errorCode) return;
        if (response.errorMessage) return;
        if (response.assets && response.assets.length > 0) {
            const asset = response.assets[0];
            setImage(asset.uri);
            setModalVisible(false);
            // upload image
            const formData = new FormData();
            formData.append('image', {
                uri: asset.uri,
                type: asset.type,
                name: asset.fileName,
            });
            const data = await uploadImage(formData);
            setImagePath(data.path);
        }
    }, []);

    const openCamera = useCallback(async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            saveToPhotos: true,
        };
        await launchCamera(options, takePhoto);
    }, []);

    const openLibrary = useCallback(async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            saveToPhotos: true,
        };
        await launchImageLibrary(options, takePhoto);
    }, []);

    const save = useCallback(async () => {
        const data = {
            title,
            content,
            image: imagePath,
        };
        const response = await addNews(data);
        console.log(response);
        // tự viết
        Alert.alert('Thêm thành công');
        setTitle('');
        setContent('');
        setImage(null);
        setImagePath(null);
    }, [title, content, imagePath]);

    return (
        <View style={styles.container}>
            {
                image ?
                    <Pressable
                        onPress={() => setModalVisible(true)}
                        style={styles.cover}>
                        <Image source={{ uri: image }}
                            style={{ width: '100%', height: 183 }} />
                    </Pressable>
                    :
                    <Pressable
                        onPress={() => setModalVisible(true)}
                        style={styles.cover}>
                        <Text>Add Cover Photo</Text>
                    </Pressable>
            }
            <TextInput
                value={title}
                style={styles.title}
                onChangeText={setTitle}
                placeholder="Title"
            />
            <TextInput
                value={content}
                style={styles.contentt}
                onChangeText={setContent}
                placeholder="Content"
                multiline={true}
                numberOfLines={10}
            />
            <Pressable onPress={save} style={styles.save}>
                <Text style={styles.txtsave}>Save</Text>
            </Pressable>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { }}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text onPress={openCamera}>Chụp ảnh</Text>
                        <Text onPress={openLibrary}>Chọn ảnh</Text>
                        <Text onPress={() => setModalVisible(false)}>Cancel</Text>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default Adds

const styles = StyleSheet.create({
    contentt: {
        top: 40,
        borderRadius: 20,
        backgroundColor: '#EEF1F4'
    },
    title: {
        top: 20,
        borderRadius: 20,
        backgroundColor: '#EEF1F4'
    },
    txtsave: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',

    },
    save: {
        marginTop: 60,
        backgroundColor: 'blue',
        width: 100,
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1877F2',
    }
    ,
    modalView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 200,
        borderRadius: 20,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cover: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 183,
        backgroundColor: '#EEF1F4'
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 16,
    }
})