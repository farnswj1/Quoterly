from django_filters.rest_framework import FilterSet, CharFilter
from .models import Quote


class QuoteFilterSet(FilterSet):
    text = CharFilter("text", label="Text", lookup_expr="icontains")

    class Meta:
        model = Quote
        fields = ("text",)
