import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const AWS_BUCKET_NAME = "citric-bucket"
const AWS_REGION = "us-east-1"

interface S3Credentials {
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
}

const getCredentials = (): S3Credentials => {
    const {
        AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY,
    } = import.meta.env as Partial<S3Credentials>;
    if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY) {
        throw new Error("AWS credentials not found");
    }
    return {
        AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY,
    }
}

const createS3Client = (): S3Client => {
    const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = getCredentials();
    return new S3Client({
        region: AWS_REGION,
        credentials: {
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY,
        },
    });
}

export function getPublicUrl(key: string): string {
    if (key.startsWith("http") || key.startsWith("data")) {
        return key;
    }
    return `https://${AWS_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${encodeURIComponent(key)}`;
}

async function listObjects(prefix: string): Promise<Object[]> {
    const s3 = createS3Client();
    const command = new ListObjectsV2Command({
        Bucket: AWS_BUCKET_NAME,
        Prefix: prefix
    });
    try {
        const data = await s3.send(command);
        if (!data.Contents) {
            return [];
        }
        return data.Contents;
    } catch (error) {
        return [];
    }
}

export const listObjectsProcessed = (date: string, hour: string) => listObjects(`${date}/processed/${hour}`)
export const listObjectsRaw = (date: string, hour: string) => listObjects(`${date}/raw/${hour}`)
export const listObjectsProcessedbyTracePath = (date: string, hour: string, tracePath: number) => listObjects(`${date}/processed/${hour}/Track_${tracePath}`)
export const listObjectsRawbyTracePath = (date: string, hour: string, tracePath: number) => listObjects(`${date}/raw/${hour}/Track_${tracePath}`)

export const listObjectsDetection = (date: string, hour: string) => listObjects(`${date}/detection/${hour}`)
export const listObjectsDetectionbyTracePath = (date: string, hour: string, tracePath: number) => listObjects(`${date}/detection/${hour}/Track_${tracePath}`)