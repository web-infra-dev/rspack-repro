import { CloudWatchClient, PutMetricDataCommand } from '@aws-sdk/client-cloudwatch';

export async function slackServer(event) {
  await new CloudWatchClient().send(new PutMetricDataCommand({
    MetricData: [],
    Namespace: 'rspack',
  }));
  console.log(event);
}
