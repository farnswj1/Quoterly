from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsAdminOrOwner(BasePermission):
    message = 'Non-staff users are not allowed.'

    def has_object_permission(self, request, view, obj):
        return obj.created_by == request.user or request.user.is_staff
