from rest_framework.serializers import ModelSerializer, ListField, DictField
from core.serializers import QuoteCreatedBySerializer
from .models import Tag, Quote


class TagSerializer(ModelSerializer):
    class Meta:
        model = Tag
        fields = ('text',)


class QuoteListSerializer(ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    created_by = QuoteCreatedBySerializer(read_only=True)

    class Meta:
        model = Quote
        fields = '__all__'


class QuoteSerializer(ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Quote
        fields = '__all__'
