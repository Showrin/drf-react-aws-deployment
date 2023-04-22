from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Quotes
from .serializers import QuotesSerializer

class QuoteViewSet(viewsets.ViewSet):
    def list(self, request):
        quotes = Quotes.objects.all()
        serialized_quotes = QuotesSerializer(quotes, many=True).data

        return Response(serialized_quotes, status=status.HTTP_200_OK)
