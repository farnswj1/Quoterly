from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.response import Response
from core.models import User
from quotes.models import Quote
from core.serializers import (
    UserTokenObtainPairSerializer,
    RegisterSerializer,
    UserListSerializer,
    UserProfileSerializer
)
from quotes.serializers import QuoteListSerializer
from core.filters import UserFilterSet
from core.permissions import IsAdminOrUserOrReadOnly


# Create your views here.
class UserTokenObtainPairView(TokenObtainPairView):
    serializer_class = UserTokenObtainPairSerializer


class UserTokenRefreshView(TokenRefreshView):
    pass


class UserListAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserListSerializer
    filterset_class = UserFilterSet


class UserProfileAPIView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAdminOrUserOrReadOnly]

    def retrieve(self, request, *args, **kwargs):
        user = self.get_object()
        quotes = Quote.objects.filter(created_by=user)
        user_data = UserProfileSerializer(user, read_only=True).data
        quotes_data = QuoteListSerializer(quotes, many=True, read_only=True).data
        return Response({'user': user_data, 'quotes': quotes_data})


class RegisterUserAPIView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
