import type { Data, TimelineEvent } from "./types"

export const imageUrls = Array.from({length: 24}, (_, i) => `https://picsum.photos/300/200?random=${i+1}`)

export const timeline: TimelineEvent[] = Array.from({length: 24}, (_, i) => {
    if (i <= 12) {
        return {
            time: `${i} AM`,
            color: "bg-gray-400"
        }
    }
    return {
        time: `${i-12} PM`,
        color: "bg-gray-400"
    }
})

export const mockObjects: Data = [{
    Key: "https://picsum.photos/id/1/1280/720",
    LastModified: new Date(),
    ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
    Size: 0,
    StorageClass: "STANDARD",
    ChecksumAlgorithm: [],
    ChecksumType: ""
}, {
    Key: "https://picsum.photos/id/2/1280/720",
    LastModified: new Date(),
    ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
    Size: 0,
    StorageClass: "STANDARD",
    ChecksumAlgorithm: [],
    ChecksumType: ""
}, {
    Key: "https://picsum.photos/id/3/1280/720",
    LastModified: new Date(),
    ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
    Size: 0,
    StorageClass: "STANDARD",
    ChecksumAlgorithm: [],
    ChecksumType: ""
}]