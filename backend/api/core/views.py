from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Quotes
from .serializers import QuotesSerializer

class QuoteViewSet(viewsets.ViewSet):
    def list(self, request):
        quotes = Quotes.objects.all()
        serialized_quotes = QuotesSerializer(quotes, many=True).data

        return Response(serialized_quotes, status=status.HTTP_200_OK)
    

    def create(self, request):
        data = request.data
        request_serializer = QuotesSerializer(data=data)

        if request_serializer.is_valid(raise_exception=True):
            quote = request_serializer.create(request_serializer.validated_data)

            quote.save()

            return Response("Your quote has been created successfully.", status=status.HTTP_200_OK)

        
        return Response(request_serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)
