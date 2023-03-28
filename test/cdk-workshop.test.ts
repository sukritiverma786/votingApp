import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as CdkWorkshop from '../lib/cdk-workshop-stack';

test('SQS Queue and SNS Topic Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkWorkshop.CdkWorkshopStack(app, 'MyTestStack');
  // THEN

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SQS::Queue', {
    VisibilityTimeout: 300
  });
  template.resourceCountIs('AWS::SNS::Topic', 1);
});
// import { App, Stack } from 'aws-cdk-lib';
// import { Bucket } from 'aws-cdk-lib/aws-s3';

// const app = new App();
// const stack = new Stack(app, 'TestStack');

// new Bucket(stack, 'TestBucket');

