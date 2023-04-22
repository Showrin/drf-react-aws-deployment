from rest_framework import serializers
from .models import Quotes

class QuotesSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    quote = serializers.CharField()
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        return Quotes(**validated_data)
