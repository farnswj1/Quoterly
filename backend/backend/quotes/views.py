from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
)
from .models import Tag, Quote
from .serializers import TagSerializer, QuoteSerializer
from .filters import QuoteFilterSet


# Create your views here.
class QuoteListAPIView(ListAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer
    filterset_class = QuoteFilterSet
