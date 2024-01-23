Imports System.Runtime.InteropServices.JavaScript
Imports Grpc.Core
Imports Grpc.Net.Client
Imports Spark.Connect

Module Program
    Sub Main(args As String())
        Task.Run(function() RunSparkJob()).Wait()
        Console.WriteLine("Done")
        Return
    End Sub

    Private Async Function RunSparkJob as Task(Of Boolean)
        
        Dim channel = GrpcChannel.ForAddress("http://localhost:15002", new GrpcChannelOptions())
        Await channel.ConnectAsync()
        
        Dim client = new SparkConnectService.SparkConnectServiceClient(channel)
        
        Dim rangeRelation = new Relation()
        rangeRelation.Range = New Spark.Connect.Range()
        rangeRelation.Range.Start = 10
        rangeRelation.Range.End = 100
        rangeRelation.Range.Step = 5
        rangeRelation.Range.NumPartitions = 1
        
        Dim plan = new Plan()
        plan.Command = New Command()
        plan.Command.WriteOperation = New WriteOperation()
        plan.Command.WriteOperation.Mode = WriteOperation.Types.SaveMode.Overwrite
        plan.Command.WriteOperation.Source = "csv"
        plan.Command.WriteOperation.Path = "/tmp/wowVB.csv"
        plan.Command.WriteOperation.Input = rangeRelation
        
        Dim request = new ExecutePlanRequest()
        request.Plan = plan
        Dim response = client.ExecutePlan(request, New Metadata())
        
        While Await response.ResponseStream.MoveNext()
            
        End While
        
        Return True
        
        End Function
End Module
