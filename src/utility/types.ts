export type Data = Object[]

export type Object = {
    Key:               string;
    LastModified:      Date;
    ETag:              string;
    ChecksumAlgorithm: string[];
    ChecksumType:      string;
    Size:              number;
    StorageClass:      string;
}

export type DayButtonProps = {
    selected: boolean,
    change: number,
}