"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const assertions_1 = require("aws-cdk-lib/assertions");
const CdkWorkshop = require("../lib/cdk-workshop-stack");
test('SQS Queue and SNS Topic Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkWorkshop.CdkWorkshopStack(app, 'MyTestStack');
    // THEN
    const template = assertions_1.Template.fromStack(stack);
    template.hasResourceProperties('AWS::SQS::Queue', {
        VisibilityTimeout: 300
    });
    template.resourceCountIs('AWS::SNS::Topic', 1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXdvcmtzaG9wLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstd29ya3Nob3AudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUNuQyx1REFBeUQ7QUFDekQseURBQXlEO0FBRXpELElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLEVBQUU7SUFDM0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUIsT0FBTztJQUNQLE1BQU0sS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNuRSxPQUFPO0lBRVAsTUFBTSxRQUFRLEdBQUcscUJBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFM0MsUUFBUSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixFQUFFO1FBQ2hELGlCQUFpQixFQUFFLEdBQUc7S0FDdkIsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBUZW1wbGF0ZSwgTWF0Y2ggfSBmcm9tICdhd3MtY2RrLWxpYi9hc3NlcnRpb25zJztcbmltcG9ydCAqIGFzIENka1dvcmtzaG9wIGZyb20gJy4uL2xpYi9jZGstd29ya3Nob3Atc3RhY2snO1xuXG50ZXN0KCdTUVMgUXVldWUgYW5kIFNOUyBUb3BpYyBDcmVhdGVkJywgKCkgPT4ge1xuICBjb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuICAvLyBXSEVOXG4gIGNvbnN0IHN0YWNrID0gbmV3IENka1dvcmtzaG9wLkNka1dvcmtzaG9wU3RhY2soYXBwLCAnTXlUZXN0U3RhY2snKTtcbiAgLy8gVEhFTlxuXG4gIGNvbnN0IHRlbXBsYXRlID0gVGVtcGxhdGUuZnJvbVN0YWNrKHN0YWNrKTtcblxuICB0ZW1wbGF0ZS5oYXNSZXNvdXJjZVByb3BlcnRpZXMoJ0FXUzo6U1FTOjpRdWV1ZScsIHtcbiAgICBWaXNpYmlsaXR5VGltZW91dDogMzAwXG4gIH0pO1xuICB0ZW1wbGF0ZS5yZXNvdXJjZUNvdW50SXMoJ0FXUzo6U05TOjpUb3BpYycsIDEpO1xufSk7XG4iXX0=