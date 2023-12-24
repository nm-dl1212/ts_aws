import * as cdk from 'aws-cdk-lib';
import { RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from 'aws-cdk-lib/aws-s3';


export class AwsWebappStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // s3
    const bucket1 = new s3.Bucket(this, 'S3Bucket1', {
      bucketName: 'test-bucket1-fromcdk',
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // s3
    const bucket2 = new s3.Bucket(this, 'S3Bucket2', {
      bucketName: 'test-bucket2-fromcdk',
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

  }
}
