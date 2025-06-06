import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

interface S3Credentials {
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
}

const credentials = (): S3Credentials => {
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

const createS3Client = () => {
    const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = credentials();
    return new S3Client({
        region: "us-east-1",
        credentials: {
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY,
        },
    });
}

const s3: S3Client = createS3Client();

export function getPublicUrl(key: string): string {
    return `https://citric-bucket.s3.us-east-1.amazonaws.com/${encodeURIComponent(key)}`;
}

export async function listObjectsProcessed() {
    const command = new ListObjectsV2Command({
        Bucket: "citric-bucket",
        Prefix: `2025-06-05 15:00 PM/processed/`
    });
    try {
        const data = await s3.send(command);
        return data.Contents;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function listObjectsRaw() {
    const command = new ListObjectsV2Command({
        Bucket: "citric-bucket",
        Prefix: `2025-06-05 15:00 PM/raw/`
    });
    try {
        const data = await s3.send(command);
        return data.Contents;
    } catch (error) {
        console.log(error);
        return [];
    }
}