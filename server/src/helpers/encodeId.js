import base62 from 'uuid-base62';

export default function encodeId(id) {
    let encodedId = id;

    if(id && typeof id === 'string') {
        encodedId = base62.encode(id);
    }
    
    return encodedId;
}
