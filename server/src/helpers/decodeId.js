import base62 from 'uuid-base62';

export default function decodeId(id) {
    let decodedId = id;

    if(id && typeof id === 'string') {
        decodedId = base62.decode(decodedId);
    }
    
    return decodedId;
}
