class firestoreCollection {
    collectionRef
    
    constructor(collectionRef) {
        this.collectionRef = collectionRef
    }

    async get(_id) {
        const documentRef = this.collectionRef.doc(_id);
        const document = await documentRef.get()
        return document.exists ? document.data() : undefined
    }
    async add(data) {
        const documentRef = await this.collectionRef.add(data)
        const document = await documentRef.get()
        // edit doc with an id
        return document.exists ? document.data() : null
    }
    async replace(data, _id) {
        const documentRef = this.collectionRef.doc(_id)
        await documentRef.set(data)
        const document = await documentRef.get(_id)
        return document.exists ? document.data() : null
    }
    async delete(data, _id) {
        const documentRef = this.collectionRef.doc(_id)
        const document = await documentRef.delete(data)
        return document.exists ? document.data() : null
    }
    async edit(data, _id) {
        const documentRef = this.collectionRef.doc(_id)
        await documentRef.update(data)
        const document = await documentRef.get(_id)
        return document.exists ? document.data() : null
    }
}

module.exports.firestoreCollection = firestoreCollection