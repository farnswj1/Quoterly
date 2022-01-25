from django_filters.rest_framework import FilterSet, CharFilter
from .models import User


class UserFilterSet(FilterSet):
    username = CharFilter('username', label='Username', lookup_expr='icontains')
    first_name = CharFilter('first_name', label='First Name', lookup_expr='icontains')
    last_name = CharFilter('last_name', label='Last Name', lookup_expr='icontains')

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name')
