from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsAdminOrOwnerOrReadOnly(BasePermission):
    message = 'Non-staff users are not allowed.'

    def has_object_permission(self, request, view, obj):
        return request.method in SAFE_METHODS or obj == request.user or request.user.is_staff
