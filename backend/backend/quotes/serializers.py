from rest_framework.serializers import ModelSerializer, ListField, DictField
from .models import Tag, Quote


class TagSerializer(ModelSerializer):
    class Meta:
        model = Tag
        fields = ('text',)


class QuoteSerializer(ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Quote
        fields = '__all__'
