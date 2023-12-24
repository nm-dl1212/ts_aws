import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from 'aws-cdk-lib/aws-s3'

export class AwsWebappStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // s3
    const bucket = new s3.Bucket(this, 'AwsS3Bucket', {
      bucketName: 'test-bucket-fromcdk'
    });
  }
}
