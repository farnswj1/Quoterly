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
from .permissions import IsAdminOrOwner


# Create your views here.
class QuoteListAPIView(ListAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer
    filterset_class = QuoteFilterSet


class QuoteInfoAPIView(RetrieveAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer


class QuoteCreateAPIView(CreateAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer


class QuoteUpdateAPIView(UpdateAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer
    permission_classes = [IsAdminOrOwner]


class QuoteDeleteAPIView(DestroyAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer
    permission_classes = [IsAdminOrOwner]
